import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilLimpiezaPiletas extends BasePage {

    readonly LIMPIEZA_PILETAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIEZA_PILETAS = this.page.locator('//a [@id="menu-item-category-limpieza-piletas"]')
    }

    async clickBazarTextilLimpiezaPiletas(): Promise<void> {
        await this.click(this.LIMPIEZA_PILETAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilLimpiezaPiletas(): Promise<void> {
        await this.clickBazarTextilLimpiezaPiletas()
    }
}
