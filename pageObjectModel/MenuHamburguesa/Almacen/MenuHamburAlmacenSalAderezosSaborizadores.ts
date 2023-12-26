import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenSalAderezosSaborizadores extends BasePage {

    readonly SAL_ADEREZOS_SABORIZADORES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SAL_ADEREZOS_SABORIZADORES = this.page.locator('//a [@id="menu-item-category-sal-aderezos-saborizantes"]')
    }

    async clickAlmacenSalAderezosSaborizadores(): Promise<void> {
        await this.click(this.SAL_ADEREZOS_SABORIZADORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenSalAderezosSaborizadores(): Promise<void> {
        await this.clickAlmacenSalAderezosSaborizadores()
    }
}
