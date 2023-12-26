import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenHierbasSecasEspecias extends BasePage {

    readonly HIERBAS_SECAS_ESPECIAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HIERBAS_SECAS_ESPECIAS = this.page.locator('//a [@id="menu-item-category-hierbas-secas-especiales"]')
    }

    async clickAlmacenHierbasSecasEspecias(): Promise<void> {
        await this.click(this.HIERBAS_SECAS_ESPECIAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenHierbasSecasEspecias(): Promise<void> {
        await this.clickAlmacenHierbasSecasEspecias()
    }
}
